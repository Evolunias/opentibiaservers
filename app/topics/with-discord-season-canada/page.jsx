import WithDiscordSeasonCanadaKeywordPage, { generateMetadata } from './with-discord-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonCanadaKeywordPage />;
}
