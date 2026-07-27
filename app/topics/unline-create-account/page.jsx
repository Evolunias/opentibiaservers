import UnlineCreateAccountKeywordPage, { generateMetadata } from './unline-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineCreateAccountKeywordPage />;
}
