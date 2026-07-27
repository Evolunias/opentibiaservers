import CanobDonationsKeywordPage, { generateMetadata } from './canob-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobDonationsKeywordPage />;
}
