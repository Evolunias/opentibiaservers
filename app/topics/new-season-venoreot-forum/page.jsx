import NewSeasonVenoreotForumKeywordPage, { generateMetadata } from './new-season-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotForumKeywordPage />;
}
