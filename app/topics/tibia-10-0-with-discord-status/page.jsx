import Tibia100WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-10-0-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithDiscordStatusKeywordPage />;
}
