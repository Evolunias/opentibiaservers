import Tibia81WithDiscordOtServerKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordOtServerKeywordPage />;
}
