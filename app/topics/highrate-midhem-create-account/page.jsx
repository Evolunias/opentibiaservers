import HighrateMidhemCreateAccountKeywordPage, { generateMetadata } from './highrate-midhem-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemCreateAccountKeywordPage />;
}
