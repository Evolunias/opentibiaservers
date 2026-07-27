import PopularKasteriaForumKeywordPage, { generateMetadata } from './popular-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaForumKeywordPage />;
}
