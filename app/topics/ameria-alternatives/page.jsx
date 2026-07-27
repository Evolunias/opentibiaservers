import AmeriaAlternativesKeywordPage, { generateMetadata } from './ameria-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaAlternativesKeywordPage />;
}
