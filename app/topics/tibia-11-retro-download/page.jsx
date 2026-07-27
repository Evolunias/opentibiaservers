import Tibia11RetroDownloadKeywordPage, { generateMetadata } from './tibia-11-retro-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroDownloadKeywordPage />;
}
