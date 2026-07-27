import WithDiscordDownloadUkKeywordPage, { generateMetadata } from './with-discord-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDownloadUkKeywordPage />;
}
