import PopularRealestaForumKeywordPage, { generateMetadata } from './popular-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaForumKeywordPage />;
}
