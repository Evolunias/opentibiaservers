import NepteraAlternativesKeywordPage, { generateMetadata } from './neptera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraAlternativesKeywordPage />;
}
