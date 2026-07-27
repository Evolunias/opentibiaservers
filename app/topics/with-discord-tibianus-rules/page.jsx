import WithDiscordTibianusRulesKeywordPage, { generateMetadata } from './with-discord-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibianusRulesKeywordPage />;
}
