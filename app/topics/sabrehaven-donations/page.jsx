import SabrehavenDonationsKeywordPage, { generateMetadata } from './sabrehaven-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenDonationsKeywordPage />;
}
