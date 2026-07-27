import CustomNilotCreateAccountKeywordPage, { generateMetadata } from './custom-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotCreateAccountKeywordPage />;
}
