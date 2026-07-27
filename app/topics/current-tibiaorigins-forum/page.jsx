import CurrentTibiaoriginsForumKeywordPage, { generateMetadata } from './current-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsForumKeywordPage />;
}
