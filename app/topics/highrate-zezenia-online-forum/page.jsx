import HighrateZezeniaOnlineForumKeywordPage, { generateMetadata } from './highrate-zezenia-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineForumKeywordPage />;
}
