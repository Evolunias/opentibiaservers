import Tibia14RetroDownloadKeywordPage, { generateMetadata } from './tibia-14-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroDownloadKeywordPage />;
}
