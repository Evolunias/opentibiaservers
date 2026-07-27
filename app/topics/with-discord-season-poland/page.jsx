import WithDiscordSeasonPolandKeywordPage, { generateMetadata } from './with-discord-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonPolandKeywordPage />;
}
