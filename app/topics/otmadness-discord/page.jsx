import OtmadnessDiscordKeywordPage, { generateMetadata } from './otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessDiscordKeywordPage />;
}
