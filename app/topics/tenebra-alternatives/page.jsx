import TenebraAlternativesKeywordPage, { generateMetadata } from './tenebra-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraAlternativesKeywordPage />;
}
