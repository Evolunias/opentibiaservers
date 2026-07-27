import PopularEvoleraForumKeywordPage, { generateMetadata } from './popular-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraForumKeywordPage />;
}
