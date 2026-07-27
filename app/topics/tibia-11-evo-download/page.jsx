import Tibia11EvoDownloadKeywordPage, { generateMetadata } from './tibia-11-evo-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoDownloadKeywordPage />;
}
