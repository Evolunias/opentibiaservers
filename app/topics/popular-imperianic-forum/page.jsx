import PopularImperianicForumKeywordPage, { generateMetadata } from './popular-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicForumKeywordPage />;
}
