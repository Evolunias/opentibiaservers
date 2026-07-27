import NewSeasonKasteriaForumKeywordPage, { generateMetadata } from './new-season-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaForumKeywordPage />;
}
