import TopTibiaraDownloadKeywordPage, { generateMetadata } from './top-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraDownloadKeywordPage />;
}
