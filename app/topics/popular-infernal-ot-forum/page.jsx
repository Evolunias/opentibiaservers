import PopularInfernalOtForumKeywordPage, { generateMetadata } from './popular-infernal-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtForumKeywordPage />;
}
