import Serenity15WithDiscordServerKeywordPage, { generateMetadata } from './serenity-15-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15WithDiscordServerKeywordPage />;
}
