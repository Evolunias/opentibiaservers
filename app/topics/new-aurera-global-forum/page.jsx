import NewAureraGlobalForumKeywordPage, { generateMetadata } from './new-aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalForumKeywordPage />;
}
