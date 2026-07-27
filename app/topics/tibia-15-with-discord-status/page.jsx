import Tibia15WithDiscordStatusKeywordPage, { generateMetadata } from './tibia-15-with-discord-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordStatusKeywordPage />;
}
