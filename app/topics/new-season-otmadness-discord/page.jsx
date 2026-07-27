import NewSeasonOtmadnessDiscordKeywordPage, { generateMetadata } from './new-season-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessDiscordKeywordPage />;
}
