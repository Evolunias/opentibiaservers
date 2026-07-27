import Serenity80WithDiscordServerKeywordPage, { generateMetadata } from './serenity-8-0-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80WithDiscordServerKeywordPage />;
}
