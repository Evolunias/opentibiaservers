import TopRealestaForumKeywordPage, { generateMetadata } from './top-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaForumKeywordPage />;
}
