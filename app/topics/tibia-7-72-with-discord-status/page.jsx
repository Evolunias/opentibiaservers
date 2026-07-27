import Tibia772WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-7-72-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithDiscordStatusKeywordPage />;
}
