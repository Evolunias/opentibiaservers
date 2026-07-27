import Tibia14WithDiscordServerKeywordPage, { generateMetadata } from './tibia-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithDiscordServerKeywordPage />;
}
