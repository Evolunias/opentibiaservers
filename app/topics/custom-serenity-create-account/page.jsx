import CustomSerenityCreateAccountKeywordPage, { generateMetadata } from './custom-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityCreateAccountKeywordPage />;
}
