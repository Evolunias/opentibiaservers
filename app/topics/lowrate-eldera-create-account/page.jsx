import LowrateElderaCreateAccountKeywordPage, { generateMetadata } from './lowrate-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaCreateAccountKeywordPage />;
}
