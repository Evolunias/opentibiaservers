import HighrateAmeriaForumKeywordPage, { generateMetadata } from './highrate-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaForumKeywordPage />;
}
