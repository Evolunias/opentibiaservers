import PopularYurotsForumKeywordPage, { generateMetadata } from './popular-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsForumKeywordPage />;
}
