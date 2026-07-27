import ImperianicDonationsKeywordPage, { generateMetadata } from './imperianic-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicDonationsKeywordPage />;
}
