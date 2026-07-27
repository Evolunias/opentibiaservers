import TopClassicusForumKeywordPage, { generateMetadata } from './top-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusForumKeywordPage />;
}
