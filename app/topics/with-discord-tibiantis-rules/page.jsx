import WithDiscordTibiantisRulesKeywordPage, { generateMetadata } from './with-discord-tibiantis-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisRulesKeywordPage />;
}
