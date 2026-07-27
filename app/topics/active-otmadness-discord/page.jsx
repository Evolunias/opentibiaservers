import ActiveOtmadnessDiscordKeywordPage, { generateMetadata } from './active-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessDiscordKeywordPage />;
}
