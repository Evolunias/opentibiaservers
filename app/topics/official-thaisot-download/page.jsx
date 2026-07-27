import OfficialThaisotDownloadKeywordPage, { generateMetadata } from './official-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotDownloadKeywordPage />;
}
