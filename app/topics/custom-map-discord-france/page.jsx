import CustomMapDiscordFranceKeywordPage, { generateMetadata } from './custom-map-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordFranceKeywordPage />;
}
