import NtoStarDonationsKeywordPage, { generateMetadata } from './nto-star-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarDonationsKeywordPage />;
}
