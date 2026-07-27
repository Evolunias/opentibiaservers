import TopTibijkaForumKeywordPage, { generateMetadata } from './top-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaForumKeywordPage />;
}
