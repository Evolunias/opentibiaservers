import RookgaardTalesAlternativesKeywordPage, { generateMetadata } from './rookgaard-tales-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesAlternativesKeywordPage />;
}
