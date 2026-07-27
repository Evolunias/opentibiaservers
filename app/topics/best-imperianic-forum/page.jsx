import BestImperianicForumKeywordPage, { generateMetadata } from './best-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicForumKeywordPage />;
}
