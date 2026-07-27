import Tibia854WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-8-54-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithDiscordStatusKeywordPage />;
}
