import MarolaotAlternativesKeywordPage, { generateMetadata } from './marolaot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotAlternativesKeywordPage />;
}
