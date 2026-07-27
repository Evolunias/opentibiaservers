import LowrateSerenityDownloadKeywordPage, { generateMetadata } from './lowrate-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityDownloadKeywordPage />;
}
