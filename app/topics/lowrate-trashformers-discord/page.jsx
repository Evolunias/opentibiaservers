import LowrateTrashformersDiscordKeywordPage, { generateMetadata } from './lowrate-trashformers-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersDiscordKeywordPage />;
}
