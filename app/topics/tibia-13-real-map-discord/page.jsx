import Tibia13RealMapDiscordKeywordPage, { generateMetadata } from './tibia-13-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapDiscordKeywordPage />;
}
