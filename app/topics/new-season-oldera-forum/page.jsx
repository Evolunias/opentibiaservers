import NewSeasonOlderaForumKeywordPage, { generateMetadata } from './new-season-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaForumKeywordPage />;
}
