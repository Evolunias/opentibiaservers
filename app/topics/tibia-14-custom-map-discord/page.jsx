import Tibia14CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-14-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapDiscordKeywordPage />;
}
