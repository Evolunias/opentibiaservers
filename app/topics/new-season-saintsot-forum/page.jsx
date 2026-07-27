import NewSeasonSaintsotForumKeywordPage, { generateMetadata } from './new-season-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotForumKeywordPage />;
}
