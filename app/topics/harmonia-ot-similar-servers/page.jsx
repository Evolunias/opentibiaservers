import HarmoniaOtSimilarServersKeywordPage, { generateMetadata } from './harmonia-ot-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSimilarServersKeywordPage />;
}
