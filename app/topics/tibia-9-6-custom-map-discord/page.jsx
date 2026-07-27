import Tibia96CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapDiscordKeywordPage />;
}
