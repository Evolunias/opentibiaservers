import WithDiscordTibiaraDownloadKeywordPage, { generateMetadata } from './with-discord-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraDownloadKeywordPage />;
}
