import NeranaAlternativesKeywordPage, { generateMetadata } from './nerana-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaAlternativesKeywordPage />;
}
