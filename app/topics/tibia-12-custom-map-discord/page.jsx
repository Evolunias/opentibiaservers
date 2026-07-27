import Tibia12CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-12-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12CustomMapDiscordKeywordPage />;
}
