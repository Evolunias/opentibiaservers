import SaintsotDonationsKeywordPage, { generateMetadata } from './saintsot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotDonationsKeywordPage />;
}
