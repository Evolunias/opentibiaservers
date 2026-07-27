import HighrateMidhemForumKeywordPage, { generateMetadata } from './highrate-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemForumKeywordPage />;
}
