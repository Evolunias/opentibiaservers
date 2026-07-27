import WithDiscordKasteriaDownloadKeywordPage, { generateMetadata } from './with-discord-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaDownloadKeywordPage />;
}
