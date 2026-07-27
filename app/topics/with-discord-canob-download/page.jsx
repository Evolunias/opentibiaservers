import WithDiscordCanobDownloadKeywordPage, { generateMetadata } from './with-discord-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobDownloadKeywordPage />;
}
