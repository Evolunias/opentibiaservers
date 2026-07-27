import NewSeasonTibianusForumKeywordPage, { generateMetadata } from './new-season-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusForumKeywordPage />;
}
