import TopTibianusForumKeywordPage, { generateMetadata } from './top-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusForumKeywordPage />;
}
