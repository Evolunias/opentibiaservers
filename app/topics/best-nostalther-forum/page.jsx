import BestNostaltherForumKeywordPage, { generateMetadata } from './best-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherForumKeywordPage />;
}
