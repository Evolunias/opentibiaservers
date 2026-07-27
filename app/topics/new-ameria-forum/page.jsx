import NewAmeriaForumKeywordPage, { generateMetadata } from './new-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaForumKeywordPage />;
}
