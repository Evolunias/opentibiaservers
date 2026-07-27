import Tibia14WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-14-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordLaunchKeywordPage />;
}
