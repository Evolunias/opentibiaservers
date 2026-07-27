import HarmoniaOtDonationsKeywordPage, { generateMetadata } from './harmonia-ot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtDonationsKeywordPage />;
}
