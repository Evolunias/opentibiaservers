import ThaisotRealMapServerPolandKeywordPage, { generateMetadata } from './thaisot-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRealMapServerPolandKeywordPage />;
}
