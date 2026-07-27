import CustomMadnessaliveForumKeywordPage, { generateMetadata } from './custom-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveForumKeywordPage />;
}
