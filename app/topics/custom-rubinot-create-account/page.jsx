import CustomRubinotCreateAccountKeywordPage, { generateMetadata } from './custom-rubinot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotCreateAccountKeywordPage />;
}
