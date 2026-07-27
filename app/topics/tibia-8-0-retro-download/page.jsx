import Tibia80RetroDownloadKeywordPage, { generateMetadata } from './tibia-8-0-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroDownloadKeywordPage />;
}
