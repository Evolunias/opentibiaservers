import WithDiscordCanobRulesKeywordPage, { generateMetadata } from './with-discord-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobRulesKeywordPage />;
}
