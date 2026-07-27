import WithDiscordOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './with-discord-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessOpenTibiaKeywordPage />;
}
