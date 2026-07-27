import WithDiscordYurotsGuideKeywordPage, { generateMetadata } from './with-discord-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsGuideKeywordPage />;
}
