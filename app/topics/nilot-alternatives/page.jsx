import NilotAlternativesKeywordPage, { generateMetadata } from './nilot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotAlternativesKeywordPage />;
}
