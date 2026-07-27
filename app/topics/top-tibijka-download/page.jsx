import TopTibijkaDownloadKeywordPage, { generateMetadata } from './top-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaDownloadKeywordPage />;
}
