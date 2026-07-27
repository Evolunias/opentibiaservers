import WithDiscordNepreniaDownloadKeywordPage, { generateMetadata } from './with-discord-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaDownloadKeywordPage />;
}
