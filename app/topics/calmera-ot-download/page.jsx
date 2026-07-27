import CalmeraOtDownloadKeywordPage, { generateMetadata } from './calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtDownloadKeywordPage />;
}
