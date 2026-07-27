import WithDiscordLumineraRulesKeywordPage, { generateMetadata } from './with-discord-luminera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraRulesKeywordPage />;
}
