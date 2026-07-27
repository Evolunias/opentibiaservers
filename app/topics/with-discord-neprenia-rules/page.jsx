import WithDiscordNepreniaRulesKeywordPage, { generateMetadata } from './with-discord-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaRulesKeywordPage />;
}
