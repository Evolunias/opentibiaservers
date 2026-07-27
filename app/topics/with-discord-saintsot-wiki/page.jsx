import WithDiscordSaintsotWikiKeywordPage, { generateMetadata } from './with-discord-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotWikiKeywordPage />;
}
