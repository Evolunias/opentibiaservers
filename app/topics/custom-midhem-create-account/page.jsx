import CustomMidhemCreateAccountKeywordPage, { generateMetadata } from './custom-midhem-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMidhemCreateAccountKeywordPage />;
}
