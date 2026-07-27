import HighrateAlasteraForumKeywordPage, { generateMetadata } from './highrate-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraForumKeywordPage />;
}
