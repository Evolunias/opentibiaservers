import WithDiscordCyntaraDownloadKeywordPage, { generateMetadata } from './with-discord-cyntara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraDownloadKeywordPage />;
}
