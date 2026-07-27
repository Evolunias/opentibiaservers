import WithDiscordXanteriaRulesKeywordPage, { generateMetadata } from './with-discord-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaRulesKeywordPage />;
}
