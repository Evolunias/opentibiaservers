import WithDiscordAlasteraDownloadKeywordPage, { generateMetadata } from './with-discord-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraDownloadKeywordPage />;
}
