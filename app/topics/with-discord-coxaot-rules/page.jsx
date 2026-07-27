import WithDiscordCoxaotRulesKeywordPage, { generateMetadata } from './with-discord-coxaot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotRulesKeywordPage />;
}
