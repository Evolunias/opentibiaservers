import OfficialSerenityDownloadKeywordPage, { generateMetadata } from './official-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityDownloadKeywordPage />;
}
