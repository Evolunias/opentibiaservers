import CyntaraForumKeywordPage, { generateMetadata } from './cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraForumKeywordPage />;
}
