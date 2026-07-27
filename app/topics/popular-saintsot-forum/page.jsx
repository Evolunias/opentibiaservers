import PopularSaintsotForumKeywordPage, { generateMetadata } from './popular-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotForumKeywordPage />;
}
