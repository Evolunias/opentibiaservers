import Tibia13CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-13-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapDiscordKeywordPage />;
}
