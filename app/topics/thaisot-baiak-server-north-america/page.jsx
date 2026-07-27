import ThaisotBaiakServerNorthAmericaKeywordPage, { generateMetadata } from './thaisot-baiak-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerNorthAmericaKeywordPage />;
}
