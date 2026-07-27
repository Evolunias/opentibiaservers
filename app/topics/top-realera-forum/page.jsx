import TopRealeraForumKeywordPage, { generateMetadata } from './top-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraForumKeywordPage />;
}
