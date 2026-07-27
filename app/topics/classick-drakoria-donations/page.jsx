import ClassickDrakoriaDonationsKeywordPage, { generateMetadata } from './classick-drakoria-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaDonationsKeywordPage />;
}
