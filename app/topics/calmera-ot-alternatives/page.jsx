import CalmeraOtAlternativesKeywordPage, { generateMetadata } from './calmera-ot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtAlternativesKeywordPage />;
}
