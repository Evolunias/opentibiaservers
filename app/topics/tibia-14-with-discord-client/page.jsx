import Tibia14WithDiscordClientKeywordPage, { generateMetadata } from './tibia-14-with-discord-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordClientKeywordPage />;
}
