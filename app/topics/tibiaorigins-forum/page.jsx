import TibiaoriginsForumKeywordPage, { generateMetadata } from './tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsForumKeywordPage />;
}
