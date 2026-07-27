import ArchlightDonationsKeywordPage, { generateMetadata } from './archlight-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightDonationsKeywordPage />;
}
