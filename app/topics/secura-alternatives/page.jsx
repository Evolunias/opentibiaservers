import SecuraAlternativesKeywordPage, { generateMetadata } from './secura-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraAlternativesKeywordPage />;
}
