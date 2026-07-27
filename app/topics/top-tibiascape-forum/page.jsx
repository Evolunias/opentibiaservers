import TopTibiascapeForumKeywordPage, { generateMetadata } from './top-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeForumKeywordPage />;
}
