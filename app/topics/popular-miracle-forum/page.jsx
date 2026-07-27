import PopularMiracleForumKeywordPage, { generateMetadata } from './popular-miracle-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleForumKeywordPage />;
}
