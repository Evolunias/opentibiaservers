import TibiaOtServerDownloadKeywordPage, { generateMetadata } from './tibia-ot-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerDownloadKeywordPage />;
}
