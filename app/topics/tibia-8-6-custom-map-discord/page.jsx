import Tibia86CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapDiscordKeywordPage />;
}
