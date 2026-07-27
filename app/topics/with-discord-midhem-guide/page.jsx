import WithDiscordMidhemGuideKeywordPage, { generateMetadata } from './with-discord-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemGuideKeywordPage />;
}
