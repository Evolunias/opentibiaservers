import Tibia80WithDiscordServerKeywordPage, { generateMetadata } from './tibia-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithDiscordServerKeywordPage />;
}
