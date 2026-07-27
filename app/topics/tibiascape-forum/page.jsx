import TibiascapeForumKeywordPage, { generateMetadata } from './tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeForumKeywordPage />;
}
