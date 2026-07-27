import PopularNepreniaCreateAccountKeywordPage, { generateMetadata } from './popular-neprenia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaCreateAccountKeywordPage />;
}
