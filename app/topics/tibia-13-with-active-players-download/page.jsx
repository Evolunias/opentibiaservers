import Tibia13WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-13-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersDownloadKeywordPage />;
}
