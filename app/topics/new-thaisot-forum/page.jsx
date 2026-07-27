import NewThaisotForumKeywordPage, { generateMetadata } from './new-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotForumKeywordPage />;
}
