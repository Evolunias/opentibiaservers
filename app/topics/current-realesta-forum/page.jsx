import CurrentRealestaForumKeywordPage, { generateMetadata } from './current-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaForumKeywordPage />;
}
