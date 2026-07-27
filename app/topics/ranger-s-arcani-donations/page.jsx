import RangerSArcaniDonationsKeywordPage, { generateMetadata } from './ranger-s-arcani-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniDonationsKeywordPage />;
}
