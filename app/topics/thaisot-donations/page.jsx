import ThaisotDonationsKeywordPage, { generateMetadata } from './thaisot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotDonationsKeywordPage />;
}
