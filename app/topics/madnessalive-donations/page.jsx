import MadnessaliveDonationsKeywordPage, { generateMetadata } from './madnessalive-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveDonationsKeywordPage />;
}
