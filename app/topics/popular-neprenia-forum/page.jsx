import PopularNepreniaForumKeywordPage, { generateMetadata } from './popular-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaForumKeywordPage />;
}
