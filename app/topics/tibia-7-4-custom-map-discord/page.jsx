import Tibia74CustomMapDiscordKeywordPage, { generateMetadata } from './tibia-7-4-custom-map-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74CustomMapDiscordKeywordPage />;
}
