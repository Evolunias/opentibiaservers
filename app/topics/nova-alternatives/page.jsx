import NovaAlternativesKeywordPage, { generateMetadata } from './nova-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaAlternativesKeywordPage />;
}
