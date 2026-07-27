import NewDemolidoresForumKeywordPage, { generateMetadata } from './new-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresForumKeywordPage />;
}
