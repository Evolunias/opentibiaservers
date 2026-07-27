import CurrentDemolidoresForumKeywordPage, { generateMetadata } from './current-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresForumKeywordPage />;
}
