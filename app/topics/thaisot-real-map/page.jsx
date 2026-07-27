import ThaisotRealMapKeywordPage, { generateMetadata } from './thaisot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRealMapKeywordPage />;
}
