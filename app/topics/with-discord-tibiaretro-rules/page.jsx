import WithDiscordTibiaretroRulesKeywordPage, { generateMetadata } from './with-discord-tibiaretro-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroRulesKeywordPage />;
}
