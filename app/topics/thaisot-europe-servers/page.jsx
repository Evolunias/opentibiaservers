import ThaisotEuropeServersKeywordPage, { generateMetadata } from './thaisot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotEuropeServersKeywordPage />;
}
