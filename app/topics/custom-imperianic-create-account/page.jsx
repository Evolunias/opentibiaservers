import CustomImperianicCreateAccountKeywordPage, { generateMetadata } from './custom-imperianic-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicCreateAccountKeywordPage />;
}
