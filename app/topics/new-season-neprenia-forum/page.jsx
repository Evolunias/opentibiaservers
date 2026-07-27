import NewSeasonNepreniaForumKeywordPage, { generateMetadata } from './new-season-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaForumKeywordPage />;
}
