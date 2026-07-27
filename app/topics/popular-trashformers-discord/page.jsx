import PopularTrashformersDiscordKeywordPage, { generateMetadata } from './popular-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersDiscordKeywordPage />;
}
