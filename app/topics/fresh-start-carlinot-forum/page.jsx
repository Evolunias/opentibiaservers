import FreshStartCarlinotForumKeywordPage, { generateMetadata } from './fresh-start-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotForumKeywordPage />;
}
