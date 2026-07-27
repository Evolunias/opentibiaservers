import WithDiscordClassicusDownloadKeywordPage, { generateMetadata } from './with-discord-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusDownloadKeywordPage />;
}
