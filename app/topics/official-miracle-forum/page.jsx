import OfficialMiracleForumKeywordPage, { generateMetadata } from './official-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleForumKeywordPage />;
}
