import Tibia81CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-8-1-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81CustomMapDiscordKeywordPage />;
}
