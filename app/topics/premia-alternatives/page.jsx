import PremiaAlternativesKeywordPage, { generateMetadata } from './premia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PremiaAlternativesKeywordPage />;
}
