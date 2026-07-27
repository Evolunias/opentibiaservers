import VineraAlternativesKeywordPage, { generateMetadata } from './vinera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraAlternativesKeywordPage />;
}
