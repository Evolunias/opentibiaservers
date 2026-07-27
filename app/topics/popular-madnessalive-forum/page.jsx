import PopularMadnessaliveForumKeywordPage, { generateMetadata } from './popular-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveForumKeywordPage />;
}
