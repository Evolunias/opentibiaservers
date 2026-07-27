import WithDiscordMediviaRulesKeywordPage, { generateMetadata } from './with-discord-medivia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaRulesKeywordPage />;
}
