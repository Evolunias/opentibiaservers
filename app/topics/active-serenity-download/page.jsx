import ActiveSerenityDownloadKeywordPage, { generateMetadata } from './active-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityDownloadKeywordPage />;
}
