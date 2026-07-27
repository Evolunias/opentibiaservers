import PopularRubinotCreateAccountKeywordPage, { generateMetadata } from './popular-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotCreateAccountKeywordPage />;
}
