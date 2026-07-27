import OfficialNilotDownloadKeywordPage, { generateMetadata } from './official-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotDownloadKeywordPage />;
}
