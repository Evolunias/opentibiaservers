import AnticaAlternativesKeywordPage, { generateMetadata } from './antica-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaAlternativesKeywordPage />;
}
