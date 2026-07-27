import OfficialHarmoniaOtDownloadKeywordPage, { generateMetadata } from './official-harmonia-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtDownloadKeywordPage />;
}
