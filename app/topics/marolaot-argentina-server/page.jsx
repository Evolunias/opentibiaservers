import MarolaotArgentinaServerKeywordPage, { generateMetadata } from './marolaot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotArgentinaServerKeywordPage />;
}
