import CustomOtmadnessDiscordKeywordPage, { generateMetadata } from './custom-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessDiscordKeywordPage />;
}
