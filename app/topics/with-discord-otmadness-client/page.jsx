import WithDiscordOtmadnessClientKeywordPage, { generateMetadata } from './with-discord-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessClientKeywordPage />;
}
