import TibiantisDonationsKeywordPage, { generateMetadata } from './tibiantis-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisDonationsKeywordPage />;
}
