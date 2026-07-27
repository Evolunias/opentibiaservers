import VineraOpenTibiaAlternativesKeywordPage, { generateMetadata } from './vinera-open-tibia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraOpenTibiaAlternativesKeywordPage />;
}
