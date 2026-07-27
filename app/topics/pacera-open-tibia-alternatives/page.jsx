import PaceraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './pacera-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraOpenTibiaAlternativesKeywordPage />;
}
