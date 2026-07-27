import NewNepreniaForumKeywordPage, { generateMetadata } from './new-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaForumKeywordPage />;
}
