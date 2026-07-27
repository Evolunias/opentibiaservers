import ActiveVenoreotForumKeywordPage, { generateMetadata } from './active-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotForumKeywordPage />;
}
