import NtoStarCreateAccountKeywordPage, { generateMetadata } from './nto-star-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCreateAccountKeywordPage />;
}
