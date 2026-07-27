import CustomCalmeraOtDownloadKeywordPage, { generateMetadata } from './custom-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCalmeraOtDownloadKeywordPage />;
}
