import Tibia12WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-12-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersDownloadKeywordPage />;
}
