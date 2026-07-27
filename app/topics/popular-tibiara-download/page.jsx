import PopularTibiaraDownloadKeywordPage, { generateMetadata } from './popular-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraDownloadKeywordPage />;
}
