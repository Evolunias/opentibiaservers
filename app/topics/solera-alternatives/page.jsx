import SoleraAlternativesKeywordPage, { generateMetadata } from './solera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraAlternativesKeywordPage />;
}
