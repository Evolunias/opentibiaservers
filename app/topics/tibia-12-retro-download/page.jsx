import Tibia12RetroDownloadKeywordPage, { generateMetadata } from './tibia-12-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroDownloadKeywordPage />;
}
