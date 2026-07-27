import NewOtmadnessForumKeywordPage, { generateMetadata } from './new-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessForumKeywordPage />;
}
