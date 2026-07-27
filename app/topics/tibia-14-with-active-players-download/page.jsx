import Tibia14WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-14-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersDownloadKeywordPage />;
}
