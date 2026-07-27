import Tibia81WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-8-1-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithDiscordStatusKeywordPage />;
}
