import CarlinotDonationsKeywordPage, { generateMetadata } from './carlinot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotDonationsKeywordPage />;
}
