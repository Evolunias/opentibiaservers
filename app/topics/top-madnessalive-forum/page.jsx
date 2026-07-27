import TopMadnessaliveForumKeywordPage, { generateMetadata } from './top-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMadnessaliveForumKeywordPage />;
}
