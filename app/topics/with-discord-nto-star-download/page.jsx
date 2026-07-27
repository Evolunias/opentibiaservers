import WithDiscordNtoStarDownloadKeywordPage, { generateMetadata } from './with-discord-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarDownloadKeywordPage />;
}
