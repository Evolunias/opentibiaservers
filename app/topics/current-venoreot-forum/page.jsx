import CurrentVenoreotForumKeywordPage, { generateMetadata } from './current-venoreot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotForumKeywordPage />;
}
