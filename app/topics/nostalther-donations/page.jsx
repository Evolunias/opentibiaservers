import NostaltherDonationsKeywordPage, { generateMetadata } from './nostalther-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherDonationsKeywordPage />;
}
