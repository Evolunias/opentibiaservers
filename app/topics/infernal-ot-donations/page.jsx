import InfernalOtDonationsKeywordPage, { generateMetadata } from './infernal-ot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtDonationsKeywordPage />;
}
