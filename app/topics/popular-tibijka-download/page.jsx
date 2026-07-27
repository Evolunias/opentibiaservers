import PopularTibijkaDownloadKeywordPage, { generateMetadata } from './popular-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaDownloadKeywordPage />;
}
