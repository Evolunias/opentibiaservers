import Tibia15RealMapDiscordKeywordPage, { generateMetadata } from './tibia-15-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapDiscordKeywordPage />;
}
