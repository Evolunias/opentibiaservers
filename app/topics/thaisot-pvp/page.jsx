import ThaisotPvpKeywordPage, { generateMetadata } from './thaisot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotPvpKeywordPage />;
}
