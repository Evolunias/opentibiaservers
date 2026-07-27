import NewSeasonOtmadnessForumKeywordPage, { generateMetadata } from './new-season-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessForumKeywordPage />;
}
