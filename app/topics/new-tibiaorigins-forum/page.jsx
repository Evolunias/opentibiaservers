import NewTibiaoriginsForumKeywordPage, { generateMetadata } from './new-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsForumKeywordPage />;
}
