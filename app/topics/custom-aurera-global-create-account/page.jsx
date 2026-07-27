import CustomAureraGlobalCreateAccountKeywordPage, { generateMetadata } from './custom-aurera-global-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalCreateAccountKeywordPage />;
}
