import PopularAmeriaCreateAccountKeywordPage, { generateMetadata } from './popular-ameria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaCreateAccountKeywordPage />;
}
