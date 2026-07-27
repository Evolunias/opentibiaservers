import BestSerenityCreateAccountKeywordPage, { generateMetadata } from './best-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityCreateAccountKeywordPage />;
}
