import TibiaPrivateServerDownloadKeywordPage, { generateMetadata } from './tibia-private-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerDownloadKeywordPage />;
}
