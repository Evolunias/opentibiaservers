import MarolaotChileServersKeywordPage, { generateMetadata } from './marolaot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotChileServersKeywordPage />;
}
