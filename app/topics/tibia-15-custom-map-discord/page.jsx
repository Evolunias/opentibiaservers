import Tibia15CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-15-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapDiscordKeywordPage />;
}
