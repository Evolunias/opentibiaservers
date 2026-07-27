import WithDiscordEvoleraRulesKeywordPage, { generateMetadata } from './with-discord-evolera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraRulesKeywordPage />;
}
