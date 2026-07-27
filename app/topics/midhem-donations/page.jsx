import MidhemDonationsKeywordPage, { generateMetadata } from './midhem-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemDonationsKeywordPage />;
}
