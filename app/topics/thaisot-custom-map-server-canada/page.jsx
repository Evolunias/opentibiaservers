import ThaisotCustomMapServerCanadaKeywordPage, { generateMetadata } from './thaisot-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotCustomMapServerCanadaKeywordPage />;
}
