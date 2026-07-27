import PopularSerenityDownloadKeywordPage, { generateMetadata } from './popular-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityDownloadKeywordPage />;
}
