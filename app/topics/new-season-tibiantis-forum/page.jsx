import NewSeasonTibiantisForumKeywordPage, { generateMetadata } from './new-season-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisForumKeywordPage />;
}
