import Tibia84WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordStatusKeywordPage />;
}
