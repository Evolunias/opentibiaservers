import CustomTibianusCreateAccountKeywordPage, { generateMetadata } from './custom-tibianus-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibianusCreateAccountKeywordPage />;
}
