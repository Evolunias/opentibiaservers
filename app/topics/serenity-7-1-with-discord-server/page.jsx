import Serenity71WithDiscordServerKeywordPage, { generateMetadata } from './serenity-7-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71WithDiscordServerKeywordPage />;
}
