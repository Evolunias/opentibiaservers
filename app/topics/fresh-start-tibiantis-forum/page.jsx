import FreshStartTibiantisForumKeywordPage, { generateMetadata } from './fresh-start-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisForumKeywordPage />;
}
