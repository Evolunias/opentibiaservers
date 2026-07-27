import WithDiscordTrashformersOtServerKeywordPage, { generateMetadata } from './with-discord-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTrashformersOtServerKeywordPage />;
}
