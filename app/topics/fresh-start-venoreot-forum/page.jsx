import FreshStartVenoreotForumKeywordPage, { generateMetadata } from './fresh-start-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotForumKeywordPage />;
}
