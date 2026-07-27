import OriginaltibiaUkServerKeywordPage, { generateMetadata } from './originaltibia-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaUkServerKeywordPage />;
}
