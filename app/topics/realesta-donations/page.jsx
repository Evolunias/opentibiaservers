import RealestaDonationsKeywordPage, { generateMetadata } from './realesta-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaDonationsKeywordPage />;
}
