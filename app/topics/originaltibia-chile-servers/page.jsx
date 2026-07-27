import OriginaltibiaChileServersKeywordPage, { generateMetadata } from './originaltibia-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaChileServersKeywordPage />;
}
