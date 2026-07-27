import CustomZuneraOtDownloadKeywordPage, { generateMetadata } from './custom-zunera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtDownloadKeywordPage />;
}
