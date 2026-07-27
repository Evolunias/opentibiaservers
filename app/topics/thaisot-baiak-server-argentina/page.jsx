import ThaisotBaiakServerArgentinaKeywordPage, { generateMetadata } from './thaisot-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerArgentinaKeywordPage />;
}
