import PopularNtoStarForumKeywordPage, { generateMetadata } from './popular-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarForumKeywordPage />;
}
