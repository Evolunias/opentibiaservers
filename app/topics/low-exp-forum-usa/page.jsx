import LowExpForumUsaKeywordPage, { generateMetadata } from './low-exp-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpForumUsaKeywordPage />;
}
