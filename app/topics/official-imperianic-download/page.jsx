import OfficialImperianicDownloadKeywordPage, { generateMetadata } from './official-imperianic-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicDownloadKeywordPage />;
}
