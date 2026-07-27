import BestOtmadnessForumKeywordPage, { generateMetadata } from './best-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOtmadnessForumKeywordPage />;
}
