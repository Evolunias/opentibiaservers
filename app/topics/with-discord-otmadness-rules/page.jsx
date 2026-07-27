import WithDiscordOtmadnessRulesKeywordPage, { generateMetadata } from './with-discord-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessRulesKeywordPage />;
}
