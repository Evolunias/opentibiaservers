import Tibia11CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-11-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11CustomMapDiscordKeywordPage />;
}
