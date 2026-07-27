import LowrateKasteriaCreateAccountKeywordPage, { generateMetadata } from './lowrate-kasteria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaCreateAccountKeywordPage />;
}
