import CurrentOlderaForumKeywordPage, { generateMetadata } from './current-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaForumKeywordPage />;
}
