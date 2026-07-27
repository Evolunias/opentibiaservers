import MarolaotPolandServerKeywordPage, { generateMetadata } from './marolaot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotPolandServerKeywordPage />;
}
