import Tibia80WithDiscordDownloadKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordDownloadKeywordPage />;
}
