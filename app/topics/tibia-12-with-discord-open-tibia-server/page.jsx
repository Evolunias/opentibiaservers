import Tibia12WithDiscordOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-12-with-discord-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordOpenTibiaServerKeywordPage />;
}
