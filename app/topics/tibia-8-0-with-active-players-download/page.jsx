import Tibia80WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersDownloadKeywordPage />;
}
