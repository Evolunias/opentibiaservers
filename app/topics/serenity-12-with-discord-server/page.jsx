import Serenity12WithDiscordServerKeywordPage, { generateMetadata } from './serenity-12-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12WithDiscordServerKeywordPage />;
}
