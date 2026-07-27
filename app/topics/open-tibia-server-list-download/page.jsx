import OpenTibiaServerListDownloadKeywordPage, { generateMetadata } from './open-tibia-server-list-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListDownloadKeywordPage />;
}
