import TibianusAlternativesKeywordPage, { generateMetadata } from './tibianus-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusAlternativesKeywordPage />;
}
