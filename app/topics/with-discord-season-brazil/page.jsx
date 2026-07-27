import WithDiscordSeasonBrazilKeywordPage, { generateMetadata } from './with-discord-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonBrazilKeywordPage />;
}
