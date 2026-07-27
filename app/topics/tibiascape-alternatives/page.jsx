import TibiascapeAlternativesKeywordPage, { generateMetadata } from './tibiascape-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeAlternativesKeywordPage />;
}
