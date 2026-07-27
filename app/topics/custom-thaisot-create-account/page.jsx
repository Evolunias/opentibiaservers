import CustomThaisotCreateAccountKeywordPage, { generateMetadata } from './custom-thaisot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotCreateAccountKeywordPage />;
}
