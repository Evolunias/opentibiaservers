import OfficialCarlinotDownloadKeywordPage, { generateMetadata } from './official-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotDownloadKeywordPage />;
}
