import EternalOdysseyDonationsKeywordPage, { generateMetadata } from './eternal-odyssey-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyDonationsKeywordPage />;
}
