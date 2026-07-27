import Tibia84WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordLaunchKeywordPage />;
}
