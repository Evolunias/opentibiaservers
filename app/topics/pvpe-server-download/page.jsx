import PvpeServerDownloadKeywordPage, { generateMetadata } from './pvpe-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerDownloadKeywordPage />;
}
