import Tibia12EvoDownloadKeywordPage, { generateMetadata } from './tibia-12-evo-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoDownloadKeywordPage />;
}
