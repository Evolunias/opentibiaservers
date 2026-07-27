import HighrateMiracleForumKeywordPage, { generateMetadata } from './highrate-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleForumKeywordPage />;
}
