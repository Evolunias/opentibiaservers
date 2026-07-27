import HighrateOtmadnessForumKeywordPage, { generateMetadata } from './highrate-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessForumKeywordPage />;
}
