import PopularUnlineForumKeywordPage, { generateMetadata } from './popular-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineForumKeywordPage />;
}
