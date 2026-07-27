import TibianusDonationsKeywordPage, { generateMetadata } from './tibianus-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusDonationsKeywordPage />;
}
