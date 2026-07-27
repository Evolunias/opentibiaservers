import RealMapMediviaDiscordKeywordPage, { generateMetadata } from './real-map-medivia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMediviaDiscordKeywordPage />;
}
