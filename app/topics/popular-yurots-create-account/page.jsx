import PopularYurotsCreateAccountKeywordPage, { generateMetadata } from './popular-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsCreateAccountKeywordPage />;
}
