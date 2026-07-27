import WithDiscordTrashformersWikiKeywordPage, { generateMetadata } from './with-discord-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersWikiKeywordPage />;
}
