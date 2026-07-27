import CurrentTrashformersDiscordKeywordPage, { generateMetadata } from './current-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersDiscordKeywordPage />;
}
