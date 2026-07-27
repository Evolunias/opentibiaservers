import CalmeraOtDonationsKeywordPage, { generateMetadata } from './calmera-ot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtDonationsKeywordPage />;
}
