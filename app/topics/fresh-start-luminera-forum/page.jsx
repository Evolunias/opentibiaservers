import FreshStartLumineraForumKeywordPage, { generateMetadata } from './fresh-start-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraForumKeywordPage />;
}
