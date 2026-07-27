import Tibia12WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-12-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithDiscordStatusKeywordPage />;
}
