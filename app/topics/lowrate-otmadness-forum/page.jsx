import LowrateOtmadnessForumKeywordPage, { generateMetadata } from './lowrate-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessForumKeywordPage />;
}
