import ShadowcoresAlternativesKeywordPage, { generateMetadata } from './shadowcores-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresAlternativesKeywordPage />;
}
