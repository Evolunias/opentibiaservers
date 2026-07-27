import OriginaltibiaUkServersKeywordPage, { generateMetadata } from './originaltibia-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaUkServersKeywordPage />;
}
