import Tibia11WithDiscordDownloadKeywordPage, { generateMetadata } from './tibia-11-with-discord-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordDownloadKeywordPage />;
}
