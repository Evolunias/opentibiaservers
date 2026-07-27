import ActiveTibiaoriginsForumKeywordPage, { generateMetadata } from './active-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsForumKeywordPage />;
}
