import AureraGlobalDonationsKeywordPage, { generateMetadata } from './aurera-global-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalDonationsKeywordPage />;
}
