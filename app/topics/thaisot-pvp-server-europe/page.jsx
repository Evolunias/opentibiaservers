import ThaisotPvpServerEuropeKeywordPage, { generateMetadata } from './thaisot-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpServerEuropeKeywordPage />;
}
