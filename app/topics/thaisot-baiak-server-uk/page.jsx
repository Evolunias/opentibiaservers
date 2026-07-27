import ThaisotBaiakServerUkKeywordPage, { generateMetadata } from './thaisot-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerUkKeywordPage />;
}
