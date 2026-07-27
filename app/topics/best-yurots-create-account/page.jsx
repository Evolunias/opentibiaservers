import BestYurotsCreateAccountKeywordPage, { generateMetadata } from './best-yurots-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsCreateAccountKeywordPage />;
}
