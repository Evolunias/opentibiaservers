import CustomTrashformersDiscordKeywordPage, { generateMetadata } from './custom-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersDiscordKeywordPage />;
}
