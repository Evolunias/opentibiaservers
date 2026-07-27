import NewImperianicForumKeywordPage, { generateMetadata } from './new-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicForumKeywordPage />;
}
