import WithDiscordSabrehavenRulesKeywordPage, { generateMetadata } from './with-discord-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenRulesKeywordPage />;
}
