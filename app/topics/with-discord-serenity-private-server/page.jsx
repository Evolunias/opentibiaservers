import WithDiscordSerenityPrivateServerKeywordPage, { generateMetadata } from './with-discord-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityPrivateServerKeywordPage />;
}
