import NewSeasonMiracleForumKeywordPage, { generateMetadata } from './new-season-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleForumKeywordPage />;
}
