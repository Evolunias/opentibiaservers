import Tibia11WithDiscordOpenTibiaServerKeywordPage, { generateMetadata } from './tibia-11-with-discord-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordOpenTibiaServerKeywordPage />;
}
