import NilotForumKeywordPage, { generateMetadata } from './nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotForumKeywordPage />;
}
