import CustomMediviaForumKeywordPage, { generateMetadata } from './custom-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaForumKeywordPage />;
}
