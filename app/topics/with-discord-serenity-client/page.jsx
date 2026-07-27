import WithDiscordSerenityClientKeywordPage, { generateMetadata } from './with-discord-serenity-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityClientKeywordPage />;
}
