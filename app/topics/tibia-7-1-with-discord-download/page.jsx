import Tibia71WithDiscordDownloadKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordDownloadKeywordPage />;
}
