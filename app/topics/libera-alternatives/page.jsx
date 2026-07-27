import LiberaAlternativesKeywordPage, { generateMetadata } from './libera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaAlternativesKeywordPage />;
}
