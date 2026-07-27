import ThaisotAlternativesKeywordPage, { generateMetadata } from './thaisot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotAlternativesKeywordPage />;
}
