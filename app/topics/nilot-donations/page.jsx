import NilotDonationsKeywordPage, { generateMetadata } from './nilot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotDonationsKeywordPage />;
}
