import NewRealeraForumKeywordPage, { generateMetadata } from './new-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraForumKeywordPage />;
}
