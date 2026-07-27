import WithDiscordTibijkaDownloadKeywordPage, { generateMetadata } from './with-discord-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaDownloadKeywordPage />;
}
