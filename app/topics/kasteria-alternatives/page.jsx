import KasteriaAlternativesKeywordPage, { generateMetadata } from './kasteria-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaAlternativesKeywordPage />;
}
