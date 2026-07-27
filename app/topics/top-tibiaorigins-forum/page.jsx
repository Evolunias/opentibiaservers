import TopTibiaoriginsForumKeywordPage, { generateMetadata } from './top-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsForumKeywordPage />;
}
