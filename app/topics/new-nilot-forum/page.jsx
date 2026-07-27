import NewNilotForumKeywordPage, { generateMetadata } from './new-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotForumKeywordPage />;
}
