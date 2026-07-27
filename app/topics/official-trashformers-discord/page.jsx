import OfficialTrashformersDiscordKeywordPage, { generateMetadata } from './official-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersDiscordKeywordPage />;
}
