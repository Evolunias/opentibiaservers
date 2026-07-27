import CurrentKasteriaForumKeywordPage, { generateMetadata } from './current-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaForumKeywordPage />;
}
