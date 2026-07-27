import WithDiscordSerenityOfficialKeywordPage, { generateMetadata } from './with-discord-serenity-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityOfficialKeywordPage />;
}
