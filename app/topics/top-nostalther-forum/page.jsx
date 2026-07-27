import TopNostaltherForumKeywordPage, { generateMetadata } from './top-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherForumKeywordPage />;
}
