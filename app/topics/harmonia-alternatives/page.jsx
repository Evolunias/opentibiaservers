import HarmoniaAlternativesKeywordPage, { generateMetadata } from './harmonia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaAlternativesKeywordPage />;
}
