import TopAlasteraForumKeywordPage, { generateMetadata } from './top-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraForumKeywordPage />;
}
