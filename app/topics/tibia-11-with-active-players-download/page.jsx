import Tibia11WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-11-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersDownloadKeywordPage />;
}
