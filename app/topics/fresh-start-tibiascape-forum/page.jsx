import FreshStartTibiascapeForumKeywordPage, { generateMetadata } from './fresh-start-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeForumKeywordPage />;
}
