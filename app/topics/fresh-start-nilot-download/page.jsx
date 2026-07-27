import FreshStartNilotDownloadKeywordPage, { generateMetadata } from './fresh-start-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotDownloadKeywordPage />;
}
