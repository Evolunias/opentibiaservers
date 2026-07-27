import Tibia80WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordStatusKeywordPage />;
}
