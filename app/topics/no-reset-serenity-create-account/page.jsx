import NoResetSerenityCreateAccountKeywordPage, { generateMetadata } from './no-reset-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityCreateAccountKeywordPage />;
}
