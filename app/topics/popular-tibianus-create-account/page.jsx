import PopularTibianusCreateAccountKeywordPage, { generateMetadata } from './popular-tibianus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibianusCreateAccountKeywordPage />;
}
