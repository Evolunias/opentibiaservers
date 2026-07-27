import FreshStartMediviaForumKeywordPage, { generateMetadata } from './fresh-start-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaForumKeywordPage />;
}
