import CustomEvoleraCreateAccountKeywordPage, { generateMetadata } from './custom-evolera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraCreateAccountKeywordPage />;
}
