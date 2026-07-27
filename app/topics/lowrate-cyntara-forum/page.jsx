import LowrateCyntaraForumKeywordPage, { generateMetadata } from './lowrate-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraForumKeywordPage />;
}
