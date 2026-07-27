import MiracleDonationsKeywordPage, { generateMetadata } from './miracle-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleDonationsKeywordPage />;
}
