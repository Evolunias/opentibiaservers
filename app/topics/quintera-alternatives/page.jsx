import QuinteraAlternativesKeywordPage, { generateMetadata } from './quintera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraAlternativesKeywordPage />;
}
