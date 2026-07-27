import NewSeasonAlasteraForumKeywordPage, { generateMetadata } from './new-season-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraForumKeywordPage />;
}
