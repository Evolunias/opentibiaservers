import WithDiscordMidhemDownloadKeywordPage, { generateMetadata } from './with-discord-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemDownloadKeywordPage />;
}
