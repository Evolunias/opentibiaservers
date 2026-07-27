import ThaisotClientKeywordPage, { generateMetadata } from './thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotClientKeywordPage />;
}
