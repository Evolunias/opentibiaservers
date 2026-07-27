import BestSaintsotForumKeywordPage, { generateMetadata } from './best-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotForumKeywordPage />;
}
