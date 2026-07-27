import CustomAlasteraCreateAccountKeywordPage, { generateMetadata } from './custom-alastera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAlasteraCreateAccountKeywordPage />;
}
