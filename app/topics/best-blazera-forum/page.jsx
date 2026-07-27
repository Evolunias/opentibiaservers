import BestBlazeraForumKeywordPage, { generateMetadata } from './best-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraForumKeywordPage />;
}
