import CustomOlderaCreateAccountKeywordPage, { generateMetadata } from './custom-oldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaCreateAccountKeywordPage />;
}
