import WithDiscordThorniaDownloadKeywordPage, { generateMetadata } from './with-discord-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaDownloadKeywordPage />;
}
