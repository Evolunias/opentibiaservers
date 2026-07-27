import ElderaDonationsKeywordPage, { generateMetadata } from './eldera-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaDonationsKeywordPage />;
}
