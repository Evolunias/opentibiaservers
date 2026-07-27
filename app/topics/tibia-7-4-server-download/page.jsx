import Tibia74ServerDownloadKeywordPage, { generateMetadata } from './tibia-7-4-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerDownloadKeywordPage />;
}
