import NoxiousotDonationsKeywordPage, { generateMetadata } from './noxiousot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotDonationsKeywordPage />;
}
