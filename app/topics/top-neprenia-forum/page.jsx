import TopNepreniaForumKeywordPage, { generateMetadata } from './top-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaForumKeywordPage />;
}
