import CustomCarlinotCreateAccountKeywordPage, { generateMetadata } from './custom-carlinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotCreateAccountKeywordPage />;
}
