import WithDiscordTrashformersServerKeywordPage, { generateMetadata } from './with-discord-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersServerKeywordPage />;
}
