import ElderaCreateAccountKeywordPage, { generateMetadata } from './eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCreateAccountKeywordPage />;
}
