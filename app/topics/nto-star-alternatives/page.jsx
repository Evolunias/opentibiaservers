import NtoStarAlternativesKeywordPage, { generateMetadata } from './nto-star-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarAlternativesKeywordPage />;
}
