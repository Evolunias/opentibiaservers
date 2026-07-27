import Tibia15WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-15-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordLaunchKeywordPage />;
}
