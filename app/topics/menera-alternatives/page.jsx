import MeneraAlternativesKeywordPage, { generateMetadata } from './menera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraAlternativesKeywordPage />;
}
