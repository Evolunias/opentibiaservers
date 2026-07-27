import WithDiscordSerenityRulesKeywordPage, { generateMetadata } from './with-discord-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityRulesKeywordPage />;
}
