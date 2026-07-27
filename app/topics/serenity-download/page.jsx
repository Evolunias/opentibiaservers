import SerenityDownloadKeywordPage, { generateMetadata } from './serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityDownloadKeywordPage />;
}
