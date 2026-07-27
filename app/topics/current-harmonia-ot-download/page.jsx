import CurrentHarmoniaOtDownloadKeywordPage, { generateMetadata } from './current-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtDownloadKeywordPage />;
}
