import WithDiscordRealestaGuideKeywordPage, { generateMetadata } from './with-discord-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaGuideKeywordPage />;
}
