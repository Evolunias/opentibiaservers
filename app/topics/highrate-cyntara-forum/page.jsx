import HighrateCyntaraForumKeywordPage, { generateMetadata } from './highrate-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraForumKeywordPage />;
}
