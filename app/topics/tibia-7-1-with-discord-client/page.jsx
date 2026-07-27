import Tibia71WithDiscordClientKeywordPage, { generateMetadata } from './tibia-7-1-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithDiscordClientKeywordPage />;
}
