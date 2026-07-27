import CustomHarmoniaOtDownloadKeywordPage, { generateMetadata } from './custom-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtDownloadKeywordPage />;
}
