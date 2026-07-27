import WithDiscordOtmadnessDiscordKeywordPage, { generateMetadata } from './with-discord-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessDiscordKeywordPage />;
}
