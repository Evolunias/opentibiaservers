import MarolaotSwedenServersKeywordPage, { generateMetadata } from './marolaot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSwedenServersKeywordPage />;
}
