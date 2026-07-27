import CurrentMiracleForumKeywordPage, { generateMetadata } from './current-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleForumKeywordPage />;
}
