import WithDiscordVenoreotRulesKeywordPage, { generateMetadata } from './with-discord-venoreot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotRulesKeywordPage />;
}
