import WithDiscordUnlineDownloadKeywordPage, { generateMetadata } from './with-discord-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineDownloadKeywordPage />;
}
