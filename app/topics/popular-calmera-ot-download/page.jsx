import PopularCalmeraOtDownloadKeywordPage, { generateMetadata } from './popular-calmera-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtDownloadKeywordPage />;
}
