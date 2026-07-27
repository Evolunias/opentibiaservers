import PopularTibijkaCreateAccountKeywordPage, { generateMetadata } from './popular-tibijka-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaCreateAccountKeywordPage />;
}
