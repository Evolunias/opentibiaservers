import NewSerenityDownloadKeywordPage, { generateMetadata } from './new-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityDownloadKeywordPage />;
}
