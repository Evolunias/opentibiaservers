import OriginaltibiaUsaServersKeywordPage, { generateMetadata } from './originaltibia-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaUsaServersKeywordPage />;
}
