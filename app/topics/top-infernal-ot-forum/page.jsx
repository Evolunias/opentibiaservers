import TopInfernalOtForumKeywordPage, { generateMetadata } from './top-infernal-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtForumKeywordPage />;
}
