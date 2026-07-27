import WithDiscordOtmadnessDownloadKeywordPage, { generateMetadata } from './with-discord-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessDownloadKeywordPage />;
}
