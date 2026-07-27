import LowrateNtoStarCreateAccountKeywordPage, { generateMetadata } from './lowrate-nto-star-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNtoStarCreateAccountKeywordPage />;
}
