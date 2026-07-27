import WithDiscordSerenityKeywordPage, { generateMetadata } from './with-discord-serenity';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityKeywordPage />;
}
