import Tibiara15WithDiscordServerKeywordPage, { generateMetadata } from './tibiara-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15WithDiscordServerKeywordPage />;
}
