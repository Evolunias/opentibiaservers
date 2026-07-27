import PopularOtmadnessForumKeywordPage, { generateMetadata } from './popular-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessForumKeywordPage />;
}
