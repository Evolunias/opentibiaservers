import OfficialZuneraOtDownloadKeywordPage, { generateMetadata } from './official-zunera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtDownloadKeywordPage />;
}
