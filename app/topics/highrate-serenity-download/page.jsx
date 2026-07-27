import HighrateSerenityDownloadKeywordPage, { generateMetadata } from './highrate-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityDownloadKeywordPage />;
}
