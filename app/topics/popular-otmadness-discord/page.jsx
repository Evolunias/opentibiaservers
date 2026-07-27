import PopularOtmadnessDiscordKeywordPage, { generateMetadata } from './popular-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessDiscordKeywordPage />;
}
