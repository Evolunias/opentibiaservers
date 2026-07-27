import RubinotDonationsKeywordPage, { generateMetadata } from './rubinot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotDonationsKeywordPage />;
}
