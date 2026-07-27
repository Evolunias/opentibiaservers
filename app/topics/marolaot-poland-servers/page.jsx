import MarolaotPolandServersKeywordPage, { generateMetadata } from './marolaot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotPolandServersKeywordPage />;
}
