import WithDiscordBlazeraRulesKeywordPage, { generateMetadata } from './with-discord-blazera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraRulesKeywordPage />;
}
