import NewSeasonHarmoniaOtDownloadKeywordPage, { generateMetadata } from './new-season-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtDownloadKeywordPage />;
}
