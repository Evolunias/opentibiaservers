import TrashformersGuildsKeywordPage, { generateMetadata } from './trashformers-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersGuildsKeywordPage />;
}
