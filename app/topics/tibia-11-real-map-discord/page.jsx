import Tibia11RealMapDiscordKeywordPage, { generateMetadata } from './tibia-11-real-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapDiscordKeywordPage />;
}
