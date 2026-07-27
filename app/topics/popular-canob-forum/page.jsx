import PopularCanobForumKeywordPage, { generateMetadata } from './popular-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobForumKeywordPage />;
}
