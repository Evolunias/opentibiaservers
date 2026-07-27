import Serenity11WithDiscordServerKeywordPage, { generateMetadata } from './serenity-11-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11WithDiscordServerKeywordPage />;
}
