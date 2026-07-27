import OriginaltibiaCanadaServersKeywordPage, { generateMetadata } from './originaltibia-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaCanadaServersKeywordPage />;
}
