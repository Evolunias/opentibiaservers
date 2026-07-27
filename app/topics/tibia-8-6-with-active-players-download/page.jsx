import Tibia86WithActivePlayersDownloadKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersDownloadKeywordPage />;
}
