import ThaisotRealMapServersLatinAmericaKeywordPage, { generateMetadata } from './thaisot-real-map-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRealMapServersLatinAmericaKeywordPage />;
}
