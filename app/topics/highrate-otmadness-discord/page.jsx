import HighrateOtmadnessDiscordKeywordPage, { generateMetadata } from './highrate-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessDiscordKeywordPage />;
}
