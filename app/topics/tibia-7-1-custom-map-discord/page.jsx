import Tibia71CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapDiscordKeywordPage />;
}
