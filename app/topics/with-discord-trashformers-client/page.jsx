import WithDiscordTrashformersClientKeywordPage, { generateMetadata } from './with-discord-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersClientKeywordPage />;
}
