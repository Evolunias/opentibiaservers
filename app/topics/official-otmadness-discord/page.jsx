import OfficialOtmadnessDiscordKeywordPage, { generateMetadata } from './official-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOtmadnessDiscordKeywordPage />;
}
