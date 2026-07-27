import Tibia12WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-12-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordLaunchKeywordPage />;
}
