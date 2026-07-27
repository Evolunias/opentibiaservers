import TibiaraPolandServersKeywordPage, { generateMetadata } from './tibiara-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPolandServersKeywordPage />;
}
