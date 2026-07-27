import Tibia14RealMapDiscordKeywordPage, { generateMetadata } from './tibia-14-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapDiscordKeywordPage />;
}
