import TopElderaForumKeywordPage, { generateMetadata } from './top-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaForumKeywordPage />;
}
