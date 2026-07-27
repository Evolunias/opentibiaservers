import BestHarmoniaOtDownloadKeywordPage, { generateMetadata } from './best-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtDownloadKeywordPage />;
}
