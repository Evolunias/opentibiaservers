import BestCalmeraOtDownloadKeywordPage, { generateMetadata } from './best-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCalmeraOtDownloadKeywordPage />;
}
