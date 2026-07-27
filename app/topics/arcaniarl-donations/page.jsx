import ArcaniarlDonationsKeywordPage, { generateMetadata } from './arcaniarl-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlDonationsKeywordPage />;
}
