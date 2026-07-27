import RealeraDonationsKeywordPage, { generateMetadata } from './realera-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraDonationsKeywordPage />;
}
