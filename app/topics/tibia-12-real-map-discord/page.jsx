import Tibia12RealMapDiscordKeywordPage, { generateMetadata } from './tibia-12-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapDiscordKeywordPage />;
}
