import RealMapOtmadnessDiscordKeywordPage, { generateMetadata } from './real-map-otmadness-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessDiscordKeywordPage />;
}
