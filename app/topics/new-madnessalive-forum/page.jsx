import NewMadnessaliveForumKeywordPage, { generateMetadata } from './new-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveForumKeywordPage />;
}
