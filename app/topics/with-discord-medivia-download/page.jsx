import WithDiscordMediviaDownloadKeywordPage, { generateMetadata } from './with-discord-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaDownloadKeywordPage />;
}
