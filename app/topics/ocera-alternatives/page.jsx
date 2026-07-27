import OceraAlternativesKeywordPage, { generateMetadata } from './ocera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraAlternativesKeywordPage />;
}
