import TopClassickDrakoriaForumKeywordPage, { generateMetadata } from './top-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaForumKeywordPage />;
}
