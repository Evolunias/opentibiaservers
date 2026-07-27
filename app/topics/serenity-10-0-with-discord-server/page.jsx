import Serenity100WithDiscordServerKeywordPage, { generateMetadata } from './serenity-10-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100WithDiscordServerKeywordPage />;
}
