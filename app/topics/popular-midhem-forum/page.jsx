import PopularMidhemForumKeywordPage, { generateMetadata } from './popular-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemForumKeywordPage />;
}
