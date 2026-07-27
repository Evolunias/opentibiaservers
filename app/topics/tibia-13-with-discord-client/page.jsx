import Tibia13WithDiscordClientKeywordPage, { generateMetadata } from './tibia-13-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordClientKeywordPage />;
}
