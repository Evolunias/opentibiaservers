import WithDiscordCoxaotGuideKeywordPage, { generateMetadata } from './with-discord-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCoxaotGuideKeywordPage />;
}
