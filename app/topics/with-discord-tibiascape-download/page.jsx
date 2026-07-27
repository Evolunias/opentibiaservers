import WithDiscordTibiascapeDownloadKeywordPage, { generateMetadata } from './with-discord-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeDownloadKeywordPage />;
}
