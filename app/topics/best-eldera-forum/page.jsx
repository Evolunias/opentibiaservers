import BestElderaForumKeywordPage, { generateMetadata } from './best-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaForumKeywordPage />;
}
