import TibijkaAlternativesKeywordPage, { generateMetadata } from './tibijka-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaAlternativesKeywordPage />;
}
