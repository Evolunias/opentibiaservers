import OfficialRealestaDownloadKeywordPage, { generateMetadata } from './official-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaDownloadKeywordPage />;
}
