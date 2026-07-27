import NewSeasonCalmeraOtKeywordPage, { generateMetadata } from './new-season-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCalmeraOtKeywordPage />;
}
