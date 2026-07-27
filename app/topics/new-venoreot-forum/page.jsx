import NewVenoreotForumKeywordPage, { generateMetadata } from './new-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotForumKeywordPage />;
}
