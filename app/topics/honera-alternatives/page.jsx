import HoneraAlternativesKeywordPage, { generateMetadata } from './honera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraAlternativesKeywordPage />;
}
