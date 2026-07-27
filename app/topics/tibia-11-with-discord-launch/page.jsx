import Tibia11WithDiscordLaunchKeywordPage, { generateMetadata } from './tibia-11-with-discord-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithDiscordLaunchKeywordPage />;
}
