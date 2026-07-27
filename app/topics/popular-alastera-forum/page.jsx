import PopularAlasteraForumKeywordPage, { generateMetadata } from './popular-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraForumKeywordPage />;
}
