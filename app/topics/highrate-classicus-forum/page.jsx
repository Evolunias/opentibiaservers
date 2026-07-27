import HighrateClassicusForumKeywordPage, { generateMetadata } from './highrate-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusForumKeywordPage />;
}
