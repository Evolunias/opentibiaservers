import ActiveOtmadnessForumKeywordPage, { generateMetadata } from './active-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessForumKeywordPage />;
}
