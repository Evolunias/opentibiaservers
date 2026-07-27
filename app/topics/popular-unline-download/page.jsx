import PopularUnlineDownloadKeywordPage, { generateMetadata } from './popular-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineDownloadKeywordPage />;
}
