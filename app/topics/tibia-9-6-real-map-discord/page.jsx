import Tibia96RealMapDiscordKeywordPage, { generateMetadata } from './tibia-9-6-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapDiscordKeywordPage />;
}
