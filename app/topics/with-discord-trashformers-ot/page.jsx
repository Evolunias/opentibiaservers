import WithDiscordTrashformersOtKeywordPage, { generateMetadata } from './with-discord-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersOtKeywordPage />;
}
