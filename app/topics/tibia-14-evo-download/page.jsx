import Tibia14EvoDownloadKeywordPage, { generateMetadata } from './tibia-14-evo-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoDownloadKeywordPage />;
}
