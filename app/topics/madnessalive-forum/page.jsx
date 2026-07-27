import MadnessaliveForumKeywordPage, { generateMetadata } from './madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveForumKeywordPage />;
}
