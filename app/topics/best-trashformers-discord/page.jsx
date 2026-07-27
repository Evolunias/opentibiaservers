import BestTrashformersDiscordKeywordPage, { generateMetadata } from './best-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersDiscordKeywordPage />;
}
