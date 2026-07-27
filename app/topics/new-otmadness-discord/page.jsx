import NewOtmadnessDiscordKeywordPage, { generateMetadata } from './new-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessDiscordKeywordPage />;
}
