import PopularRealeraForumKeywordPage, { generateMetadata } from './popular-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraForumKeywordPage />;
}
