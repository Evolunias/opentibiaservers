import WithDiscordNilotDownloadKeywordPage, { generateMetadata } from './with-discord-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotDownloadKeywordPage />;
}
