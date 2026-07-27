import Tibia15WithDiscordClientKeywordPage, { generateMetadata } from './tibia-15-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordClientKeywordPage />;
}
