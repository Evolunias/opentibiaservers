import HighrateRealeraForumKeywordPage, { generateMetadata } from './highrate-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraForumKeywordPage />;
}
