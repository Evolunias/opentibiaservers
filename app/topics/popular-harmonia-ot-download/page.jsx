import PopularHarmoniaOtDownloadKeywordPage, { generateMetadata } from './popular-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtDownloadKeywordPage />;
}
