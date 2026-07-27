import PopularOtmadnessDownloadKeywordPage, { generateMetadata } from './popular-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessDownloadKeywordPage />;
}
