import WithDiscordTibiameRulesKeywordPage, { generateMetadata } from './with-discord-tibiame-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameRulesKeywordPage />;
}
