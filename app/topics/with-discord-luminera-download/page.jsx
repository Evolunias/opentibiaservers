import WithDiscordLumineraDownloadKeywordPage, { generateMetadata } from './with-discord-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraDownloadKeywordPage />;
}
