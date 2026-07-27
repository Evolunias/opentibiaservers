import TopSerenityDownloadKeywordPage, { generateMetadata } from './top-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityDownloadKeywordPage />;
}
