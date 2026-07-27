import Tibia81WithDiscordClientKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordClientKeywordPage />;
}
