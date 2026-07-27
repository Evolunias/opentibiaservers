import WithDiscordMidhemWebsiteKeywordPage, { generateMetadata } from './with-discord-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemWebsiteKeywordPage />;
}
