import WithDiscordKasteriaRulesKeywordPage, { generateMetadata } from './with-discord-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaRulesKeywordPage />;
}
