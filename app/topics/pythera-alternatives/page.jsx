import PytheraAlternativesKeywordPage, { generateMetadata } from './pythera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraAlternativesKeywordPage />;
}
