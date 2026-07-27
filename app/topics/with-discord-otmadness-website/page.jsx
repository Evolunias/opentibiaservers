import WithDiscordOtmadnessWebsiteKeywordPage, { generateMetadata } from './with-discord-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessWebsiteKeywordPage />;
}
