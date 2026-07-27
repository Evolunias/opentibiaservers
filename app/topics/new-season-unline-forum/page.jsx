import NewSeasonUnlineForumKeywordPage, { generateMetadata } from './new-season-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineForumKeywordPage />;
}
