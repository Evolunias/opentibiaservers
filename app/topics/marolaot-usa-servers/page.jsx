import MarolaotUsaServersKeywordPage, { generateMetadata } from './marolaot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotUsaServersKeywordPage />;
}
