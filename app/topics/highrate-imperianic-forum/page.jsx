import HighrateImperianicForumKeywordPage, { generateMetadata } from './highrate-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicForumKeywordPage />;
}
