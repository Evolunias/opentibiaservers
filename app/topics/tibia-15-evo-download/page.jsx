import Tibia15EvoDownloadKeywordPage, { generateMetadata } from './tibia-15-evo-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoDownloadKeywordPage />;
}
