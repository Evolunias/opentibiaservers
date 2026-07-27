import WithDiscordNostaltherRulesKeywordPage, { generateMetadata } from './with-discord-nostalther-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNostaltherRulesKeywordPage />;
}
