import NewTibiantisForumKeywordPage, { generateMetadata } from './new-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisForumKeywordPage />;
}
