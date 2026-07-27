import OriginaltibiaEuropeServersKeywordPage, { generateMetadata } from './originaltibia-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaEuropeServersKeywordPage />;
}
