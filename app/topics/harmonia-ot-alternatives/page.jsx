import HarmoniaOtAlternativesKeywordPage, { generateMetadata } from './harmonia-ot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtAlternativesKeywordPage />;
}
