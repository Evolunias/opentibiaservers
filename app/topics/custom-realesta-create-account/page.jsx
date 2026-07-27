import CustomRealestaCreateAccountKeywordPage, { generateMetadata } from './custom-realesta-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaCreateAccountKeywordPage />;
}
