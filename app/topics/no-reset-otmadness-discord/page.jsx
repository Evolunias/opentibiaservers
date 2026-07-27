import NoResetOtmadnessDiscordKeywordPage, { generateMetadata } from './no-reset-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessDiscordKeywordPage />;
}
