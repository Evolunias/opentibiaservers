import WithDiscordSeasonNorthAmericaKeywordPage, { generateMetadata } from './with-discord-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonNorthAmericaKeywordPage />;
}
