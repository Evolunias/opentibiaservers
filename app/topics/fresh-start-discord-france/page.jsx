import FreshStartDiscordFranceKeywordPage, { generateMetadata } from './fresh-start-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDiscordFranceKeywordPage />;
}
