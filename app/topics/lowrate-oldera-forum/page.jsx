import LowrateOlderaForumKeywordPage, { generateMetadata } from './lowrate-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaForumKeywordPage />;
}
