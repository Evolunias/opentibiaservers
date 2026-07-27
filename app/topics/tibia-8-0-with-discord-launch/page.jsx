import Tibia80WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordLaunchKeywordPage />;
}
