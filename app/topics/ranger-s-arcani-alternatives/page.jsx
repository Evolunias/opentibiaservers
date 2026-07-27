import RangerSArcaniAlternativesKeywordPage, { generateMetadata } from './ranger-s-arcani-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniAlternativesKeywordPage />;
}
