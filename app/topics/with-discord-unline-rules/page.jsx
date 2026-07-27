import WithDiscordUnlineRulesKeywordPage, { generateMetadata } from './with-discord-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineRulesKeywordPage />;
}
