import CustomVenoreotForumKeywordPage, { generateMetadata } from './custom-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotForumKeywordPage />;
}
