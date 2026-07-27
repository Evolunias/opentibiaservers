import ThaisotBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './thaisot-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotBaiakServerLatinAmericaKeywordPage />;
}
