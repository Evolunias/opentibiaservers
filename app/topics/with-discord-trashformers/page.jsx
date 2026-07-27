import WithDiscordTrashformersKeywordPage, { generateMetadata } from './with-discord-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersKeywordPage />;
}
