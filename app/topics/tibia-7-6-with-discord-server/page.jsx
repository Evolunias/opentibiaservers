import Tibia76WithDiscordServerKeywordPage, { generateMetadata } from './tibia-7-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithDiscordServerKeywordPage />;
}
