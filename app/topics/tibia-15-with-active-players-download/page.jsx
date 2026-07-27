import Tibia15WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-15-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersDownloadKeywordPage />;
}
