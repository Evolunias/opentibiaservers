import InfernaAlternativesKeywordPage, { generateMetadata } from './inferna-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaAlternativesKeywordPage />;
}
