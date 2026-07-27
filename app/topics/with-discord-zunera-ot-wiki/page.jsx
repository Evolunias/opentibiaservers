import WithDiscordZuneraOtWikiKeywordPage, { generateMetadata } from './with-discord-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordZuneraOtWikiKeywordPage />;
}
