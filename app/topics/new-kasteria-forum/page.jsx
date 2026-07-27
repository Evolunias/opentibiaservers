import NewKasteriaForumKeywordPage, { generateMetadata } from './new-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaForumKeywordPage />;
}
