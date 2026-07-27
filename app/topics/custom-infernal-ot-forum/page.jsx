import CustomInfernalOtForumKeywordPage, { generateMetadata } from './custom-infernal-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtForumKeywordPage />;
}
