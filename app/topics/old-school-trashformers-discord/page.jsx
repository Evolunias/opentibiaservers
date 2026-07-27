import OldSchoolTrashformersDiscordKeywordPage, { generateMetadata } from './old-school-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersDiscordKeywordPage />;
}
