import WithDiscordElderaRulesKeywordPage, { generateMetadata } from './with-discord-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaRulesKeywordPage />;
}
