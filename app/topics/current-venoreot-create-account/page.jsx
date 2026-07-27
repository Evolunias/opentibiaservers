import CurrentVenoreotCreateAccountKeywordPage, { generateMetadata } from './current-venoreot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotCreateAccountKeywordPage />;
}
