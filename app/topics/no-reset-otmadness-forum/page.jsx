import NoResetOtmadnessForumKeywordPage, { generateMetadata } from './no-reset-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessForumKeywordPage />;
}
