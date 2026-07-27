import PopularClassicusForumKeywordPage, { generateMetadata } from './popular-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusForumKeywordPage />;
}
