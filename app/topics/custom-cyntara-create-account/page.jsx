import CustomCyntaraCreateAccountKeywordPage, { generateMetadata } from './custom-cyntara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraCreateAccountKeywordPage />;
}
