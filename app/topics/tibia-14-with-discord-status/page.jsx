import Tibia14WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-14-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordStatusKeywordPage />;
}
