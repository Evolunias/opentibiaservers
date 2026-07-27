import WithDiscordNilotGuideKeywordPage, { generateMetadata } from './with-discord-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotGuideKeywordPage />;
}
