import NewSeasonElderaForumKeywordPage, { generateMetadata } from './new-season-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaForumKeywordPage />;
}
