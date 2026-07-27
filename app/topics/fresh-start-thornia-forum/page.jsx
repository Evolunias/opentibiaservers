import FreshStartThorniaForumKeywordPage, { generateMetadata } from './fresh-start-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaForumKeywordPage />;
}
