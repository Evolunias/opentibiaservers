import ThaisotBaiakServerUsaKeywordPage, { generateMetadata } from './thaisot-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerUsaKeywordPage />;
}
