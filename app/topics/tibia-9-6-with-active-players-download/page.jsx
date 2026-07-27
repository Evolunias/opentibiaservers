import Tibia96WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersDownloadKeywordPage />;
}
