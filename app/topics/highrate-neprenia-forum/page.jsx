import HighrateNepreniaForumKeywordPage, { generateMetadata } from './highrate-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaForumKeywordPage />;
}
