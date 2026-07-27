import CoxaotDonationsKeywordPage, { generateMetadata } from './coxaot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotDonationsKeywordPage />;
}
