import CurrentMadnessaliveForumKeywordPage, { generateMetadata } from './current-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveForumKeywordPage />;
}
