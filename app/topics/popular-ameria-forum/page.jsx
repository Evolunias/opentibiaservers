import PopularAmeriaForumKeywordPage, { generateMetadata } from './popular-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaForumKeywordPage />;
}
