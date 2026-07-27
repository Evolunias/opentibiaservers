import OriginaltibiaPolandServersKeywordPage, { generateMetadata } from './originaltibia-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaPolandServersKeywordPage />;
}
