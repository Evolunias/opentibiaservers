import BestAlasteraForumKeywordPage, { generateMetadata } from './best-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraForumKeywordPage />;
}
