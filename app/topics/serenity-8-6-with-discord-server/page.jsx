import Serenity86WithDiscordServerKeywordPage, { generateMetadata } from './serenity-8-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86WithDiscordServerKeywordPage />;
}
