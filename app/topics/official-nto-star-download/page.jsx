import OfficialNtoStarDownloadKeywordPage, { generateMetadata } from './official-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNtoStarDownloadKeywordPage />;
}
