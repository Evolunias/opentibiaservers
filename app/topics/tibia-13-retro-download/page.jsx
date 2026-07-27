import Tibia13RetroDownloadKeywordPage, { generateMetadata } from './tibia-13-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroDownloadKeywordPage />;
}
