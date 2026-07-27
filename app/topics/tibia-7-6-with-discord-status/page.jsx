import Tibia76WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordStatusKeywordPage />;
}
