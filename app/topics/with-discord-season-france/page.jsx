import WithDiscordSeasonFranceKeywordPage, { generateMetadata } from './with-discord-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonFranceKeywordPage />;
}
