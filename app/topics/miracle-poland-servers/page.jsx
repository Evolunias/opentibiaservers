import MiraclePolandServersKeywordPage, { generateMetadata } from './miracle-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiraclePolandServersKeywordPage />;
}
