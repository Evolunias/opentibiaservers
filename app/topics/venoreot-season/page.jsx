import VenoreotSeasonKeywordPage, { generateMetadata } from './venoreot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotSeasonKeywordPage />;
}
