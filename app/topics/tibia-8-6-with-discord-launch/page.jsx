import Tibia86WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-8-6-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithDiscordLaunchKeywordPage />;
}
