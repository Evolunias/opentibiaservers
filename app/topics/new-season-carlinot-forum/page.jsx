import NewSeasonCarlinotForumKeywordPage, { generateMetadata } from './new-season-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotForumKeywordPage />;
}
