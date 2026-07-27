import CurrentOtmadnessForumKeywordPage, { generateMetadata } from './current-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessForumKeywordPage />;
}
