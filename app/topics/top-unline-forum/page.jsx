import TopUnlineForumKeywordPage, { generateMetadata } from './top-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineForumKeywordPage />;
}
