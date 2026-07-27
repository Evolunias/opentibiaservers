import WithDiscordSeasonLatinAmericaKeywordPage, { generateMetadata } from './with-discord-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonLatinAmericaKeywordPage />;
}
