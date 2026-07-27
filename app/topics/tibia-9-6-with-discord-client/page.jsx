import Tibia96WithDiscordClientKeywordPage, { generateMetadata } from './tibia-9-6-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithDiscordClientKeywordPage />;
}
