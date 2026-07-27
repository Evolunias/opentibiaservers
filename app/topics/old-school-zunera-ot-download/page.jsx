import OldSchoolZuneraOtDownloadKeywordPage, { generateMetadata } from './old-school-zunera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtDownloadKeywordPage />;
}
