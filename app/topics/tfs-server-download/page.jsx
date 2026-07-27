import TfsServerDownloadKeywordPage, { generateMetadata } from './tfs-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerDownloadKeywordPage />;
}
