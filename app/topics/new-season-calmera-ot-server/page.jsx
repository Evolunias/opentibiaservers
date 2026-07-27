import NewSeasonCalmeraOtServerKeywordPage, { generateMetadata } from './new-season-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCalmeraOtServerKeywordPage />;
}
