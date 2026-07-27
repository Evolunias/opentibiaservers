import MyaacForumKeywordPage, { generateMetadata } from './myaac-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacForumKeywordPage />;
}
