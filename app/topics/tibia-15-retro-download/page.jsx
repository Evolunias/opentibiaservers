import Tibia15RetroDownloadKeywordPage, { generateMetadata } from './tibia-15-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroDownloadKeywordPage />;
}
