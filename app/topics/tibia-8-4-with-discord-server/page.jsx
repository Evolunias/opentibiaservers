import Tibia84WithDiscordServerKeywordPage, { generateMetadata } from './tibia-8-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithDiscordServerKeywordPage />;
}
