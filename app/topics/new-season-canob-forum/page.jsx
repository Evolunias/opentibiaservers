import NewSeasonCanobForumKeywordPage, { generateMetadata } from './new-season-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobForumKeywordPage />;
}
