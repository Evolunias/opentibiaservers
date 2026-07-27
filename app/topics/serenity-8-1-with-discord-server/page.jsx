import Serenity81WithDiscordServerKeywordPage, { generateMetadata } from './serenity-8-1-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81WithDiscordServerKeywordPage />;
}
