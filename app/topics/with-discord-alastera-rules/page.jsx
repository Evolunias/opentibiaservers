import WithDiscordAlasteraRulesKeywordPage, { generateMetadata } from './with-discord-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraRulesKeywordPage />;
}
