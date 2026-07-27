import WithDiscordThaisotDownloadKeywordPage, { generateMetadata } from './with-discord-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotDownloadKeywordPage />;
}
