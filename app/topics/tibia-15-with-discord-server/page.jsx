import Tibia15WithDiscordServerKeywordPage, { generateMetadata } from './tibia-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithDiscordServerKeywordPage />;
}
