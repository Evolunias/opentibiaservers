import Serenity74WithDiscordServerKeywordPage, { generateMetadata } from './serenity-7-4-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74WithDiscordServerKeywordPage />;
}
