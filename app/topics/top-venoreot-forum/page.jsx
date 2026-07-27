import TopVenoreotForumKeywordPage, { generateMetadata } from './top-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotForumKeywordPage />;
}
