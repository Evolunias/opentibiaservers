import TrimeraAlternativesKeywordPage, { generateMetadata } from './trimera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraAlternativesKeywordPage />;
}
