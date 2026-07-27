import TopOtmadnessDiscordKeywordPage, { generateMetadata } from './top-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOtmadnessDiscordKeywordPage />;
}
