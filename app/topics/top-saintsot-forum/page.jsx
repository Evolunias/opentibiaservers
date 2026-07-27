import TopSaintsotForumKeywordPage, { generateMetadata } from './top-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotForumKeywordPage />;
}
