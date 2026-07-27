import PopularElderaForumKeywordPage, { generateMetadata } from './popular-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaForumKeywordPage />;
}
