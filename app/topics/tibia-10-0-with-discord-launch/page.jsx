import Tibia100WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordLaunchKeywordPage />;
}
