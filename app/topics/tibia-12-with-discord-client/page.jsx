import Tibia12WithDiscordClientKeywordPage, { generateMetadata } from './tibia-12-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordClientKeywordPage />;
}
