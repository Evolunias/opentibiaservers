import CustomSaintsotCreateAccountKeywordPage, { generateMetadata } from './custom-saintsot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotCreateAccountKeywordPage />;
}
