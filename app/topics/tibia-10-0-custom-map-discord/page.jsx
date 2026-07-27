import Tibia100CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapDiscordKeywordPage />;
}
