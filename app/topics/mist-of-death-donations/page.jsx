import MistOfDeathDonationsKeywordPage, { generateMetadata } from './mist-of-death-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathDonationsKeywordPage />;
}
