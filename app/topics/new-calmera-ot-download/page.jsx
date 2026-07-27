import NewCalmeraOtDownloadKeywordPage, { generateMetadata } from './new-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtDownloadKeywordPage />;
}
