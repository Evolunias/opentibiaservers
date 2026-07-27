import WithDiscordDownloadUsaKeywordPage, { generateMetadata } from './with-discord-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDownloadUsaKeywordPage />;
}
