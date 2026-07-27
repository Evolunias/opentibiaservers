import Tibia11WithDiscordTibiaPrivateServerKeywordPage, { generateMetadata } from './tibia-11-with-discord-tibia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordTibiaPrivateServerKeywordPage />;
}
