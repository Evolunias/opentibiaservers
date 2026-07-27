import WithDiscordThaisotGuideKeywordPage, { generateMetadata } from './with-discord-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotGuideKeywordPage />;
}
