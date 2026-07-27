import LowrateOtmadnessDiscordKeywordPage, { generateMetadata } from './lowrate-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessDiscordKeywordPage />;
}
