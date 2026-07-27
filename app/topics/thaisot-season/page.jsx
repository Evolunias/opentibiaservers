import ThaisotSeasonKeywordPage, { generateMetadata } from './thaisot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotSeasonKeywordPage />;
}
