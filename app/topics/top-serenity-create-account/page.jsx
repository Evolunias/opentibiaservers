import TopSerenityCreateAccountKeywordPage, { generateMetadata } from './top-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityCreateAccountKeywordPage />;
}
