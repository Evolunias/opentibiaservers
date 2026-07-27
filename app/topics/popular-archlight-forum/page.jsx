import PopularArchlightForumKeywordPage, { generateMetadata } from './popular-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightForumKeywordPage />;
}
