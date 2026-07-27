import PopularTibianusDownloadKeywordPage, { generateMetadata } from './popular-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusDownloadKeywordPage />;
}
