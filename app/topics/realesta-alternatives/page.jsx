import RealestaAlternativesKeywordPage, { generateMetadata } from './realesta-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaAlternativesKeywordPage />;
}
