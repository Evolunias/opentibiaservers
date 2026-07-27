import OtmadnessAlternativesKeywordPage, { generateMetadata } from './otmadness-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessAlternativesKeywordPage />;
}
