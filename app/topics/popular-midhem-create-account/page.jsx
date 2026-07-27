import PopularMidhemCreateAccountKeywordPage, { generateMetadata } from './popular-midhem-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemCreateAccountKeywordPage />;
}
