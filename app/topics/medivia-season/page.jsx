import MediviaSeasonKeywordPage, { generateMetadata } from './medivia-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaSeasonKeywordPage />;
}
