import OxygenotDonationsKeywordPage, { generateMetadata } from './oxygenot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotDonationsKeywordPage />;
}
