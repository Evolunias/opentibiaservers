import LowrateVenoreotCreateAccountKeywordPage, { generateMetadata } from './lowrate-venoreot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotCreateAccountKeywordPage />;
}
