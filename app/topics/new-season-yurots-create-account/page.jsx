import NewSeasonYurotsCreateAccountKeywordPage, { generateMetadata } from './new-season-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsCreateAccountKeywordPage />;
}
