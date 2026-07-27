import WithDiscordSaintsotRulesKeywordPage, { generateMetadata } from './with-discord-saintsot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotRulesKeywordPage />;
}
