import TopZuneraOtDownloadKeywordPage, { generateMetadata } from './top-zunera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtDownloadKeywordPage />;
}
