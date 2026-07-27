import LowrateSerenityCreateAccountKeywordPage, { generateMetadata } from './lowrate-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityCreateAccountKeywordPage />;
}
