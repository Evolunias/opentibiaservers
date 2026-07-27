import WithDiscordSerenityOtsKeywordPage, { generateMetadata } from './with-discord-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityOtsKeywordPage />;
}
