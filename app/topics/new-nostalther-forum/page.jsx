import NewNostaltherForumKeywordPage, { generateMetadata } from './new-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherForumKeywordPage />;
}
