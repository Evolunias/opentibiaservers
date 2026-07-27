import HighrateKasteriaForumKeywordPage, { generateMetadata } from './highrate-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaForumKeywordPage />;
}
