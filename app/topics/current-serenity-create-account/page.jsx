import CurrentSerenityCreateAccountKeywordPage, { generateMetadata } from './current-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityCreateAccountKeywordPage />;
}
