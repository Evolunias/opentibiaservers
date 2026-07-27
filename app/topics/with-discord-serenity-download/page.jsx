import WithDiscordSerenityDownloadKeywordPage, { generateMetadata } from './with-discord-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityDownloadKeywordPage />;
}
