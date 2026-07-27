import ThaisotBaiakServerMexicoKeywordPage, { generateMetadata } from './thaisot-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerMexicoKeywordPage />;
}
