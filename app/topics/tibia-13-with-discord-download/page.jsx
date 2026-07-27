import Tibia13WithDiscordDownloadKeywordPage, { generateMetadata } from './tibia-13-with-discord-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordDownloadKeywordPage />;
}
