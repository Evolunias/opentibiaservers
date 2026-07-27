import NewSeasonCalmeraOtDownloadKeywordPage, { generateMetadata } from './new-season-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCalmeraOtDownloadKeywordPage />;
}
