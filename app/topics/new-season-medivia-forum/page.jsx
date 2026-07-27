import NewSeasonMediviaForumKeywordPage, { generateMetadata } from './new-season-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaForumKeywordPage />;
}
