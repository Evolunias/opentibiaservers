import BestMediviaDownloadKeywordPage, { generateMetadata } from './best-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaDownloadKeywordPage />;
}
