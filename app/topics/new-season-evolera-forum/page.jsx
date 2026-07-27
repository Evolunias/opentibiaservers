import NewSeasonEvoleraForumKeywordPage, { generateMetadata } from './new-season-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraForumKeywordPage />;
}
