import PaceraAlternativesKeywordPage, { generateMetadata } from './pacera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraAlternativesKeywordPage />;
}
