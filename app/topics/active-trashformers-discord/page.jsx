import ActiveTrashformersDiscordKeywordPage, { generateMetadata } from './active-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersDiscordKeywordPage />;
}
