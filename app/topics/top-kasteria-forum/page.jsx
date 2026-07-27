import TopKasteriaForumKeywordPage, { generateMetadata } from './top-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaForumKeywordPage />;
}
