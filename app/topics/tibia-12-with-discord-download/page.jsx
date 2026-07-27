import Tibia12WithDiscordDownloadKeywordPage, { generateMetadata } from './tibia-12-with-discord-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordDownloadKeywordPage />;
}
