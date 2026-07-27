import WithDiscordRubinotDownloadKeywordPage, { generateMetadata } from './with-discord-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotDownloadKeywordPage />;
}
