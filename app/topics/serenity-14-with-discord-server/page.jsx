import Serenity14WithDiscordServerKeywordPage, { generateMetadata } from './serenity-14-with-discord-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14WithDiscordServerKeywordPage />;
}
