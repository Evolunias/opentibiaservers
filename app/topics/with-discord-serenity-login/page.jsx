import WithDiscordSerenityLoginKeywordPage, { generateMetadata } from './with-discord-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityLoginKeywordPage />;
}
