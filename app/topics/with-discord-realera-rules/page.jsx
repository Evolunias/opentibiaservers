import WithDiscordRealeraRulesKeywordPage, { generateMetadata } from './with-discord-realera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraRulesKeywordPage />;
}
