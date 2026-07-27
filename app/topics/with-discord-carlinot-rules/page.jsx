import WithDiscordCarlinotRulesKeywordPage, { generateMetadata } from './with-discord-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotRulesKeywordPage />;
}
