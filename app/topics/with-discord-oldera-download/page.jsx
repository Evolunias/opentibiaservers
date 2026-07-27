import WithDiscordOlderaDownloadKeywordPage, { generateMetadata } from './with-discord-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaDownloadKeywordPage />;
}
