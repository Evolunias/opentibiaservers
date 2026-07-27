import WithDiscordAmeriaRulesKeywordPage, { generateMetadata } from './with-discord-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAmeriaRulesKeywordPage />;
}
