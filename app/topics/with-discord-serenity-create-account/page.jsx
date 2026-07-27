import WithDiscordSerenityCreateAccountKeywordPage, { generateMetadata } from './with-discord-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityCreateAccountKeywordPage />;
}
