import Tibia13EvoDownloadKeywordPage, { generateMetadata } from './tibia-13-evo-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoDownloadKeywordPage />;
}
