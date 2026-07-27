import ActiveOlderaForumKeywordPage, { generateMetadata } from './active-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaForumKeywordPage />;
}
