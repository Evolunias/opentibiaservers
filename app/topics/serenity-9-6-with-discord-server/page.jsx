import Serenity96WithDiscordServerKeywordPage, { generateMetadata } from './serenity-9-6-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96WithDiscordServerKeywordPage />;
}
