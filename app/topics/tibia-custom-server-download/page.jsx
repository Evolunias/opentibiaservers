import TibiaCustomServerDownloadKeywordPage, { generateMetadata } from './tibia-custom-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerDownloadKeywordPage />;
}
