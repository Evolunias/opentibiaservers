import FideraAlternativesKeywordPage, { generateMetadata } from './fidera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraAlternativesKeywordPage />;
}
