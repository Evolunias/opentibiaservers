import WithDiscordEvoluniaRulesKeywordPage, { generateMetadata } from './with-discord-evolunia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaRulesKeywordPage />;
}
