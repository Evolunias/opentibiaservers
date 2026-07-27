import EvoForumUsaKeywordPage, { generateMetadata } from './evo-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumUsaKeywordPage />;
}
