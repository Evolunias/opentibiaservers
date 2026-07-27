import WithDiscordOtmadnessOtKeywordPage, { generateMetadata } from './with-discord-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOtmadnessOtKeywordPage />;
}
