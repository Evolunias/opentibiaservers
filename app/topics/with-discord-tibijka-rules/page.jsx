import WithDiscordTibijkaRulesKeywordPage, { generateMetadata } from './with-discord-tibijka-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaRulesKeywordPage />;
}
