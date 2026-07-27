import Tibia13WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-13-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithDiscordLaunchKeywordPage />;
}
