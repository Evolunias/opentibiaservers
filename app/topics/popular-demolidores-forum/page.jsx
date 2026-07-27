import PopularDemolidoresForumKeywordPage, { generateMetadata } from './popular-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresForumKeywordPage />;
}
