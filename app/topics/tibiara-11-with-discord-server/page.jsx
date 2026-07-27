import Tibiara11WithDiscordServerKeywordPage, { generateMetadata } from './tibiara-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11WithDiscordServerKeywordPage />;
}
