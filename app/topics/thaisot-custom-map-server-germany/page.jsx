import ThaisotCustomMapServerGermanyKeywordPage, { generateMetadata } from './thaisot-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotCustomMapServerGermanyKeywordPage />;
}
